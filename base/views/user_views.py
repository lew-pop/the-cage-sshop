import os
import uuid

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from rest_framework.response import Response

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from django.urls import reverse
from django.shortcuts import redirect, render
from django.template.loader import render_to_string

from django.utils.html import strip_tags  
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str


from base.tokens import account_activation_token
from base.serializers import UserSerializer, UserSerializerWithToken


# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v 
        return data    
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('http://localhost:3000')
    else:
        return render(request, 'activation_invalid.html')

def send_activation_email(user):
    name = user.first_name
    username = user.username
    print("Inside send activation email")
    token = account_activation_token.make_token(user)
    print("Created token")
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    print("Created uid")
    activation_link = reverse('activate', kwargs={'uidb64': uid, 'token': token})
    activation_link = f"http://localhost:8000{activation_link}"
    print("activation link created")
    html_message=f"Hi {name},<br/> <br/>Thank you for registering with The Cage SShop Online! We're excited to have you on board.<br/><br/>To complete your registration and activate your account, please verify your email address by clicking the link below:<br/><br/>{activation_link}<br/><br/>If blah blah blah "
    print("Created html message")
    message = Mail(
        from_email='thecagesshop@outlook.com',
        to_emails=user.email,
        subject='Please Verify Your Email Address for The Cage SShop Online',
        html_content= html_message
    )
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)  # {{ edit_1 }}
    except Exception as e:
        print(e.message)
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  # {{ edit_2 }}

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password']),
            #is_active = True
        )
        #print("User Created Successfully")
        #send_activation_email(user)               
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    if data['password'] != '':
        user.password = make_password(data['password'])
    user.save()
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(id=pk)

    data = request.data

    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email']
    user.is_staff = data['isAdmin']

    user.save()

    serializer = UserSerializer(user, many=False)

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    userForDeletion = User.objects.get(id=pk)
    userForDeletion.delete()
    return Response('User was deleted')