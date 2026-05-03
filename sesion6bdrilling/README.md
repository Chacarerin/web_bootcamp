# 🚀 Sesión 6B Drilling — DOM y Gestión de Eventos

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)

Ejercicio extendido de la sesión 6 orientado a la manipulación avanzada del DOM y la gestión de eventos del usuario (clicks, inputs, submit).

## 🧠 Contexto Pedagógico y Teórico
El modelo de eventos del navegador sigue el patrón Observer: los elementos del DOM son emisores de eventos, y el código JavaScript registra manejadores (listeners) que reaccionan a ellos. `addEventListener` es el método estándar moderno, preferido sobre los atributos HTML `onclick` porque permite múltiples listeners en el mismo elemento y mantiene la separación entre estructura y comportamiento.

## ⚙️ Tecnologías y Frameworks Aplicados
* **Event Delegation**: Patrón de optimización donde un único listener en un elemento padre gestiona eventos de múltiples hijos, reduciendo el uso de memoria en listas o tablas dinámicas.
* **Propagación de Eventos (Bubbling)**: Comprensión de cómo los eventos se propagan del elemento origen hacia sus ancestros, y cómo usar `stopPropagation()` cuando es necesario.

*Desarrollado por Rubén Schnettler.*
