# ClicksForWater
**Creador:** Ricardo Román Martinez

# INSTRUCCIONES

Al comenzar el trabajo:
- git pull origin master

Al acabar

- git add *
- git commit -m "Explicacion"
- git push origin master

Avisar sobre que archivos vais a trabajar ya que si dos personas trabajan localmente en  el mismo archivo y luego lo suben, habrá un conflicto. Si trabajan en archivos distintos, no pasa nada.

### Para primer montaje:

## Parte 1 - Montaje inicial

1. Crea un directorio.
2. Abre una terminal en ese directorio.

### Crear un repositorio de git en ese directorio

git init

Al no clonar el repositorio, tenemos que agregarlo manualmente con un nombre. Por simplicidad vamos a llamarlo origin.

- git remote add origin [link al repositorio]

El link al repositorio: https://github.com/Luigiverde4/ClicksForWater.git

Cogemos los archivos de github, la rama master (con la que vamos a trabajar)
- git pull origin master

Ahora tenemos localmente master pero como vamos a querer conectarlo al repositorio en GitHub para cuando hagamos Push luego

Comprobamos de que no esté hecho ya ( por cualquier motivo) y que estemos en master.
- git branch -vv
Debería estar master seleccionado asi:
* master
Si sale ya [origin/master], no hace falta lo siguiente:


- git branch -u origin/master

Ahora si hacemos otra vez
- git branch -vv

Vermeos que tiene [origin/master] y por ende está siendo upstreamed 
Así estaría montado


## Parte 2 - Enviar tus cambios

Comprobamos si los archivos están en el index

- git status -s

Los archivos modificados saldrán como modified. 
	- Si estan en rojo, no estan en el index
	- Si estan en verde, estan en el index
En el caso de que no estén en el index, los agregamos
- git add [archivo]

Podemos comprobar que no nos olvidamos de algún archivo con git status -s como antes

Una vez en el index, tenemos que hacer un commit.

- git commit -m "Comentario descriptivo de cambios"

Aquí puedes parar si no quieres enviar a GitHub todavía pero si ir marcando tu progreso

Para mandarlo para github tenemos que:

- git push origin master

Esto nos envia a origin (nuestro repositorio) la rama master ( a origin/master ya que en la parte 1 la upstremeamos)

## Parte 3 - Descargar cambios

La realidad es que no siempre hará falta descargar los cambios porqué a lo mejor no han habido. Pero por simplificar, siempre vamos a descargar la última versión antes de trabajar.

Aquí hay detalles por curiosidad:

Primero miramos si han habido cambios

- git remote show origin

Si estamos desactualizados respecto al repositorio, nos saldrá algo así:
  Local ref configured for 'git push':
    master pushes to master (local out of date)
Entonces sabemos que tenemos que descargar cambios si o si

(Obligatorio)
Cogemos los archivos mas recientes
- git pull origin master

Podemos comprobar que estamos al dia con
- git remote show origin

Y debería salir algo asi:
  Local ref configured for 'git push':
    master pushes to master (up to date)



