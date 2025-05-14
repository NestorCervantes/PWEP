// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJkXggTNdIgD4r15FlnD5W3SJWLjVjCRM",
  authDomain: "bmp280-78678.firebaseapp.com",
  databaseURL: "https://bmp280-78678-default-rtdb.firebaseio.com",
  projectId: "bmp280-78678",
  storageBucket: "bmp280-78678.firebasestorage.app",
  messagingSenderId: "504572578934",
  appId: "1:504572578934:web:4f9a7855c1722e6fa52357"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();

// Referencia al nodo ESTADO
let dbESTADO = dbRef.ref("bmp280/ESTADO");

// Mostrar valor actual de ESTADO
dbESTADO.on('value', function(snapshot) {
  console.log("El valor del ESTADO es", snapshot.val());
  document.getElementById("ESTADO_ID").innerHTML = "ESTADO = " + snapshot.val();
});

// Función para cambiar el valor del ESTADO desde la web
function enviarEstado(valor) {
  dbESTADO.set(valor);
}
