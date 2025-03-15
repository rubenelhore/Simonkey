# Simonkey 🐵

## Tu estudio, tu ritmo

Simonkey es una plataforma educativa de IA que revoluciona la forma en que estudias y memorizas conceptos. Crea cuadernos personalizados, extrae conceptos automáticamente y utiliza técnicas avanzadas de mnemotecnia para mejorar tu retención.

![Simonkey Logo](public/assets/images/simon-mascot.png)

## 🚀 Características principales

- **Cuadernos de estudio personalizados**: Organiza tus materiales de estudio en cuadernos temáticos
- **Extracción inteligente de conceptos**: Nuestra IA identifica automáticamente los conceptos clave de tus documentos y recursos
- **Definiciones precisas y concisas**: Genera definiciones claras de 20-30 palabras para cada concepto
- **Herramientas de mnemotecnia avanzadas**:
  - Historias interactivas que conectan tus conceptos
  - Canciones memorables para recordar términos difíciles
  - Imágenes visuales para reforzar la memoria
  - Técnicas de asociación y mnemotecnia personalizadas
- **Sistema de tarjetas didácticas**: Estudio efectivo estilo Anki con seguimiento de progreso
- **Asistente IA de apoyo**: Resuelve dudas y profundiza en cualquier concepto que necesites

## 🔍 ¿Cómo funciona?

1. **Crea un cuaderno** para tus materias o temas de estudio
2. **Sube tus recursos** (documentos, enlaces, o investiga en internet)
3. **La IA extrae conceptos clave** automáticamente de tus fuentes
4. **Personaliza tus conceptos** editando definiciones o añadiendo notas
5. **Estudia a tu ritmo** con tarjetas didácticas y herramientas de memoria
6. **Evalúa tu progreso** con cuestionarios y seguimiento de dominio

## 🛠️ Stack tecnológico

- **Frontend**: React, React Router, Context API
- **Backend**: Firebase (Authentication, Firestore)
- **IA**: Integración con API de DeepSeek (MVP) y Claude (futuro)
- **Despliegue**: Vercel/Netlify con funciones serverless

## 🏗️ Estructura del proyecto

```
SIMONKEY/
├── img/
    ├── favicon.svg/
    ├── imagen.jpg/       
├── html&css.txt
├── index.html    
├── notes.txt     
├── pricing.html      
├── README.md          
├── script.js            
└── styles.css               
```

## 🚀 Instalación y configuración

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- Cuenta de Firebase
- Claves de API para servicios de IA

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/username/simonkey.git
   cd simonkey
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. **Configurar variables de entorno**
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Añade las siguientes variables:
   ```
   REACT_APP_FIREBASE_API_KEY=tu_clave_de_api
   REACT_APP_FIREBASE_AUTH_DOMAIN=tu_dominio.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=tu_proyecto_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=tu_bucket.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
   REACT_APP_FIREBASE_APP_ID=tu_app_id
   REACT_APP_DEEPSEEK_API_KEY=tu_clave_api_deepseek
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   # o con yarn
   yarn start
   ```

## 📝 Uso

### Crear un nuevo cuaderno
1. Inicia sesión en tu cuenta
2. En la página principal, haz clic en "Nuevo Cuaderno"
3. Dale un nombre y descripción a tu cuaderno
4. ¡Listo para añadir conceptos!

### Importar conceptos
1. En tu cuaderno, ve a la sección "Recursos"
2. Selecciona "Subir Documentos", "Links" o "Investigar en Internet"
3. Sigue las instrucciones para procesar tus fuentes
4. Revisa y personaliza los conceptos extraídos automáticamente

### Estudiar con tarjetas
1. En tu cuaderno, selecciona "Tarjetas didácticas" en la sección Herramientas
2. Elige los conceptos que quieres estudiar
3. Navega por las tarjetas, evaluando tu conocimiento
4. Los conceptos se marcarán según tu progreso

## 🌱 Plan de desarrollo

### MVP (Mayo 2025)
- ✅ Autenticación de usuarios
- ✅ Creación y gestión de cuadernos
- ✅ Adición de conceptos (manual y asistida por IA)
- ✅ Sistema básico de tarjetas de estudio
- ✅ Interfaz simple pero funcional

### Próximas características
- 🔄 Historias y canciones generadas por IA
- 🔄 Imágenes mnemotécnicas
- 🔄 Cuestionarios y evaluaciones
- 🔄 Integración con Claude API
- 🔄 Aplicación móvil

## 👥 Contribuciones

¿Quieres contribuir al proyecto? ¡Genial! Puedes:

1. Hacer fork del repositorio
2. Crear una nueva rama (`git checkout -b feature/amazing-feature`)
3. Hacer commit de tus cambios (`git commit -m 'Add some amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE)

## 🙏 Agradecimientos

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [DeepSeek AI](https://deepseek.ai/)
- [Anthropic Claude](https://www.anthropic.com/)
- Todos nuestros beta testers y usuarios iniciales

---

Desarrollado con ❤️ por el equipo Simonkey
