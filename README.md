# IW-API-REST-B7
## Instalación
- Python 3 última versión https://www.python.org/downloads/
- Node.js última versión https://nodejs.org/en/

- Una vez instalado Python ejecutaremos el siguiente comando en el directorio del proyecto: 
    
    cd backend
    
    Nos movemos al directorio del backend y ejecutamos:
    
    pip install -r requirements.txt
    
    Este comando instalará todas las dependencias y frameworks necesarios para el backend.
    
- En la carpeta "certificados" se encuentran 3 certificados los cuales debemos ejecutar y añadir si tenemos problemas con djongo y la base de datos.  

- Nos movemos a la carperta del frontend ejecutando los siguientes comandos:

    cd ..
    
    Para movernos al directorio padre /IW-API-REST-B7
    
    cd frontend
    
    Nos movemos al directorio del frontend y ejecutamos:
    
    npm install
    
    Este comando instalará todas las dependecias necesarias para el frontend.
  
- Por último, ejecutamos los siguientes comandos: 

    En el directorio del backend

    python manage.py runserver 
    
    Ejecutaremos el comando dentro de nuestro proyecto donde se encuentra el archivo "manage.py", el cual arrancará el servidor.
    
    En el directorio del frontend
    
    npm start
    
    Ejecutaremos el comando dentro del frontend donde arrancará el cliente.
    
 Una vez ejecutado este comando podemos acceder a http://localhost:3000/ y disfrutar de nuestra aplicación.

