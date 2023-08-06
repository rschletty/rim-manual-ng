---
layout: ../../layouts/toc.astro
title: "El panel de gestión de RIM"
author: "Jack Falejczyk - Pneuma Solutions"
date: "13 Jul 2023"
---
RIM cuenta con un panel de control basado en web para facilitar diversas tareas de gestión de equipos y cuentas. Puede gestionar los equipos desatendidos existentes, crear instaladores preconfigurados para equipos de destino y mucho más.  
Cabe señalar que el conjunto de funciones del panel de control depende en gran medida del nivel de suscripción de su cuenta. Por ejemplo, los usuarios empresariales pueden asignar equipos a grupos de destino, así como crear instaladores silenciosos y/o basados en MSI. Por otro lado, la creación de instaladores personalizados estándar (no silenciosos) para máquinas desatendidas es posible con una suscripción pro o superior.
## Localización del panel de control
Si usted es un controlador, la forma más fácil de llegar al tablero es a través de la interfaz principal de RIM. Al hacer clic en el botón Panel de control de RIM, se abrirá automáticamente el panel de control en su navegador predeterminado, con el inicio de sesión ya realizado.  
Si usted es un administrador de red que no tiene instalado RIM, puede simplemente acceder a su cuenta en el sitio web de RIM y aparecerá su panel de control.
## Gestión de objetivos
Cuando haga clic en el enlace "Configurar objetivos", llegará a una página que le permitirá gestionar todas las máquinas que haya configurado para el acceso desatendido. Puedes pulsar sobre cualquiera de estas máquinas para gestionarla. Una vez dentro, podrás
* Renombrar el objetivo
* Mover el objetivo a un grupo diferente (más sobre grupos de objetivos más adelante)
* Eliminar el objetivo
<!-- fin -->
## Grupos de Destino (para Cuentas Pro y superiores)
Digamos, por ejemplo, que su grupo de trabajo está repartido entre varias ubicaciones diferentes. O tal vez desea designar grupos de máquinas a sus técnicos de mantenimiento de rutina. Los grupos de destino le permiten hacer precisamente eso. Para ello, simplemente haga clic en el botón "Crear grupo de destino", asigne un nombre a su grupo y envíelo.  
Puede tener tantos grupos de destino como necesite para su caso de uso.
### Control de acceso (para organizaciones empresariales)
Si su organización asigna un técnico de soporte a un conjunto específico de máquinas, probablemente querrá asegurarse de que sólo tienen acceso a ese conjunto específico. Aquí es donde entra la configuración del control de acceso para los grupos de destino.  
Al hacer clic en un grupo de destino, se le ofrecen opciones para gestionar las máquinas del grupo, así como el propio grupo. La sección de control de acceso es donde puede conceder acceso a este grupo por cuenta. Simplemente introduzca la dirección de correo electrónico de la cuenta que desea añadir y haga clic en el botón "Dar acceso". Una vez hecho esto, aparecerá una tabla con las cuentas que tienen acceso a este grupo. Debajo de cada cuenta hay un botón "Revocar acceso". Este botón no requiere confirmación adicional.  
Debe tenerse en cuenta que todos los administradores de la organización obtienen automáticamente acceso para gestionar todos y cada uno de los grupos que se crean bajo la organización.
## Configuración de un instalador de RIM preconfigurado (Pro o superior, sólo para Windows)
Una de las formas más sencillas de configurar una máquina para conexiones desatendidas o solicitadas es crear un instalador personalizado. Esto es increíblemente útil si está configurando despliegues masivos, o incluso como una forma más sencilla de poner en marcha RIM en el ordenador de un usuario final al que planea dar soporte de forma regular.
Para ello:
1. En la pantalla de gestión de destinos, haga clic en el botón "Crear instalador de destino".
1. Primero se le preguntará si desea que esta máquina esté configurada para un acceso totalmente desatendido o para un acceso solicitado en el que el usuario tenga que aceptar una solicitud para iniciar la conexión.
1. A continuación, se le pedirá que asigne un grupo de destino. Tenga en cuenta que la selección del grupo de destino irá automáticamente al grupo de destino elegido si inicia la configuración del instalador desde la página de su grupo.
1. Se le preguntará por cuánto tiempo desea que sea válido este instalador. Puede ser válido entre 7 y 30 días. Tenga en cuenta que este plazo sólo afecta a la funcionalidad del paquete de instalación. En otras palabras, la configuración RIM de la máquina no se desactivará cuando caduque la instalación.
1. A continuación, se le ofrece la opción de asignar un nombre de bajo. Cualquier máquina aprovisionada a través de este paquete de instalación tendrá asignado este nombre de base.
1. Si usted es un administrador de empresa, verá una casilla de verificación que le permite construir el instalador como un paquete MSI. Esta opción es útil para el despliegue masivo de un instalador personalizado a un cluster de máquinas que serán designadas al grupo de destino dado.
1. Se le pedirá que proporcione un nombre para el instalador y, opcionalmente, algunas notas. Éstas son para registros internos y no aparecerán en el instalador creado.
1. Haga clic en "Crear instalador" Se le presentará el enlace de descarga que puede copiar en el portapapeles y enviar a su usuario final. Alternativamente, puede descargar el instalador directamente para su uso en despliegues masivos.
<!-- fin -->
Ahora que tiene el instalador, puede ejecutarlo de dos maneras. En cualquiera de los dos casos, la máquina se añadirá a la lista de máquinas tanto en su cuenta como en el cliente RIM una vez finalizado el instalador.
### Ejecución normal
El usuario obtendrá un aviso al ejecutar el instalador, que contendrá la siguiente información:
* El nombre del técnico junto con su organización, si procede
* la naturaleza de la conexión, es decir, si se requiere un aviso o no
<!-- fin -->
El usuario puede elegir entre responder sí o no a la instalación. La respuesta negativa cancelará la instalación. Después de que el instalador termine, el usuario recibirá un aviso informándole que su máquina está ahora configurada para acceso remoto.
### Instalación silenciosa (sólo instaladores de empresa)
Puede iniciarse una instalación silenciosa ejecutando el instalador ejecutable con el parámetro de línea de comandos */S*. Esto es útil cuando se instala RIM como parte de una rutina de despliegue masivo.
## Historial de sesiones
Puede ver todo su historial de sesiones anteriores a través del panel de control de RIM. El historial de sesiones contiene actualmente la fecha y hora de cada sesión, el nombre del ordenador al que se conectó y la duración de la sesión. También puede añadir comentarios a una sesión a través del enlace "Añadir comentario" dentro de la fila de la sesión. Esto resulta útil para añadir notas sobre el estado actual de un incidente, tanto para usted como para los administradores de la organización.
## Gestión de su suscripción (Personal )y Planes Pro)
El panel de control le permite ver y gestionar fácilmente los detalles de su suscripción a RIM. Al hacer clic en el enlace "Gestionar suscripción", podrá
* Actualizar su plan
* Actualizar su método de pago
* Cancelar pagos periódicos
<!-- fin -->
### Actualizar su plan
Puede actualizar fácilmente su suscripción. Si está en un plan mensual, se le prorrateará el cargo restante del nuevo importe, cargándose el nuevo importe completo en los meses siguientes. Al hacer clic en "Actualizar suscripción" aparece una página casi idéntica a la página inicial de selección de plan. Existen algunas diferencias notables que describiremos a continuación:
* No puede cambiar a un plan con menos máquinas. Sin embargo, puede cambiar de un plan mensual a uno anual con el mismo número de máquinas que su plan actual. Para cambiar a un plan inferior, deberá cancelar su plan, esperar a que caduque e iniciar un nuevo plan con menos máquinas.
* Los planes para empresas, incluido el complemento para empresas, no pueden adquirirse directamente a través de esta página.
<!-- fin -->
### Cancelación de pagos periódicos
Cuando haga clic en "Cancelar renovación automática", se le pedirá confirmación, tras lo cual su suscripción se configurará para que expire al final del plazo actual.