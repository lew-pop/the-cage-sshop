from django.shortcuts import render


def send_token (request):
    return render(request , 'token_send.html')

def success (request):
    return render(request , 'success.html')