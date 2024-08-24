# Use an official Python runtime as the base image
FROM python:3.8.5

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

# Run Django collectstatic (for static files)
RUN python manage.py collectstatic --noinput

# Run database migrations
RUN python manage.py migrate

# Start the Django app
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "myproject.wsgi:application"]
