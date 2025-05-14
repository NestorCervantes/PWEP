// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQkuBq2iB9jbsG6uTZZb3qKWi25QqDIak",
  authDomain: "esp32iot-719bf.firebaseapp.com",
  databaseURL: "https://esp32iot-719bf-default-rtdb.firebaseio.com",
  projectId: "esp32iot-719bf",
  storageBucket: "esp32iot-719bf.firebasestorage.app",
  messagingSenderId: "62180059813",
  appId: "1:62180059813:web:f0238a2bc0fc8296743b4c"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();

// Referencia al nodo dispensador
let dbDispensador = dbRef.ref("dispensador");

// Mostrar valores actuales de dispensador
dbDispensador.on('value', function(snapshot) {
  const data = snapshot.val();
  console.log("Datos del dispensador:", data);
  
  document.getElementById("identidad").innerHTML = (data.Identidad || "---");
  document.getElementById("pildoras").innerHTML = (data.Pildoras || "---");
  document.getElementById("cantidad").innerHTML = (data.Cantidad || "---");
  document.getElementById("estado").innerHTML = (data.Estado || "---");
});

// Función para cambiar valores del dispensador desde la web
function enviarDatos(nuevaIdentidad, nuevasPildoras, nuevaCantidad, nuevoEstado) {
  dbDispensador.set({
    Identidad: nuevaIdentidad,
    Pildoras: nuevasPildoras,
    Cantidad: nuevaCantidad,
    Estado: nuevoEstado
  });
}
