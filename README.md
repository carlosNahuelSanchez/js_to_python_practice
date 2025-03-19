# js_to_python_practice

Este repositorio contiene una versión en JavaScript que se ejecuta con Live Server y una en Python que se ejecuta con Flask de un programa web que permite al usuario interactuar con una caja de texto, cambiar su color de fondo y texto con cada clic y ver los resultados dinámicamente.

## Requisitos

- **Visual Studio Code** (o cualquier editor de tu preferencia).
- **Git** (si deseas clonar el repositorio localmente).
- **Python** (Tener instalado el lenguaje)
- **Flask** (Framework para servicio web en python)

## Instalación y Uso

### 1. Clonar el repositorio

Si no tienes el repositorio localmente, puedes clonarlo usando el siguiente comando:

```bash
git clone https://github.com/tu-usuario/js_to_python_practice.git
```
### 2. Correr programa

Para correr el programa en la web es necesario instalar el framework **Flask** de la siguiente manera:

```bash
pip install flask
```

Posteriormente a la instalacion el programa se corre con: 

```bash
python app.py
```

Flask iniciará un servidor web local en http://127.0.0.1:5000/. Abre esta URL en tu navegador para ver la aplicación funcionando.

## Cambiar a la version JavaScript

Para cambiar a la version de solo Javascript que se ejecutra con **Live Server** es necesario cambiar de rama con el siguiente comando

```bash
git checkout javascript-version
```