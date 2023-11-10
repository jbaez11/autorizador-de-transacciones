# Autorizador de transacciones

aplicación que autoriza una transacción para una
cuenta específica siguiendo un conjunto de reglas predefinidas.

## Instrucciones de Instalación

1. npm install

## Uso

1. npm run start

## swagger 
1. http://ec2-54-204-250-91.compute-1.amazonaws.com:3001/api-docs/
2. localhost:3001/api-docs/

## Rutas

1. GET: localhost:3001/getAccounts
2. POST: localhost:3001/createAccount
3. POST: localhost:3001/authorizeTransaction

## Rutas en produccion

1. GET: http://ec2-54-204-250-91.compute-1.amazonaws.com:3001/getAccounts
2. POST: http://ec2-54-204-250-91.compute-1.amazonaws.com:3001/createAccount
3. POST: http://ec2-54-204-250-91.compute-1.amazonaws.com:3001/authorizeTransaction

## Aplicacion angular 

http://dwgq7dkng9pk9.cloudfront.net/
https://dwgq7dkng9pk9.cloudfront.net/transaction

## Estructura de Directorios

Clean Architecture

## Ejemplo de bodys para las rutas

## http://ec2-54-204-250-91.compute-1.amazonaws.com:3001/createAccount
{
    "cuenta": {
        "id": 1,
        "tarjeta_activa": true,
        "limite_disponible": 100
    }
}
## http://ec2-54-204-250-91.compute-1.amazonaws.com:3001/authorizeTransaction
{
    "transaccion": {
        "id": 1,
        "comerciante": "Coca Cola",
        "cantidad": 21,
        "tiempo": "2019-02-13T10:00:00.000Z"
    }
}




