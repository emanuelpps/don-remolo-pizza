import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore,getDocs, collection, where, query } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCc3M_ytYhYDg7BTnl6twh5f9IxAEa5D3U",
  authDomain: "don-remolo-pizza-c6974.firebaseapp.com",
  projectId: "don-remolo-pizza-c6974",
  storageBucket: "don-remolo-pizza-c6974.appspot.com",
  messagingSenderId: "152244000854",
  appId: "1:152244000854:web:62e6fd7e1330b3798f03f7",
  measurementId: "G-7CS4GK4FEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//obtenemos todos los productos
export async function getAllProducts(){
    const productsCollectionRef = collection(db, 'products');
    const docSnapshot = await getDocs(productsCollectionRef);

    const dataProducts = docSnapshot.docs.map((item) => {
        const product = {
            ...item.data(),
            id: item.id
        }
        return product;
    })
    return dataProducts;
}

export async function getProductsByCategory(catergoryId){
    const productsCollectionRef = collection(db, 'products');
    const q = query(productsCollectionRef, where("category", "==", catergoryId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) =>{
        const productCategory = {
            ...doc.data(),
            id: doc.id,
            category: doc.category
        }
        return productCategory
    })

}

export default db;