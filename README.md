# Notification Service

## What is it?

REST API to send notifications to users on SMS and WhatsApp.

## Deployed URL

    https://notification-service-api.herokuapp.com/

## How to start the server locally

    clone the repository and run followind commands:

    ```
    cd notification-service
    npm install
    node server.js or npm start
    ```

## APIS for the service

### Deployed

    To send instant message on whatsapp:
    ```
    POST https://notification-service-api.herokuapp.com/v1/notification/send-instant-whatsapp
    ```

    To send scheduled message on whatsapp:
    ```
    POST https://notification-service-api.herokuapp.com/v1/notification/send-schedule-whatsapp/2
    ```

    To send instant message on sms:
    ```
    POST https://notification-service-api.herokuapp.com/v1/notification/send-instant-sms
    ```

    To send scheduled message on sms:
    ```
    POST https://notification-service-api.herokuapp.com/v1/notification/send-schedule-sms/2
    ```

### Local

    To send instant message on whatsapp:
    ```
    POST http://localhost:3000/v1/notification/send-instant-whatsapp
    ```

    To send scheduled message on whatsapp:
    ```
    POST http://localhost:3000/v1/notification/send-schedule-whatsapp/2
    ```

    To send instant message on sms:
    ```
    POST http://localhost:3000/v1/notification/send-instant-sms
    ```

    To send scheduled message on sms:
    ```
    POST http://localhost:3000/v1/notification/send-schedule-sms/2
    ```

## Environment Variables

    TWILIO_ACCOUNT_SID=ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    TWILIO_AUTH_TOKEN=d2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
