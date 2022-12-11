import { projectFirestore } from "@/firebase/config"
import { ref } from "vue";

const fetchService = (url) => {

  const fetchedData = ref(null)
  const fetchedRealtimeData = ref(null)
  const errorAddData = ref(null)
  const errorFetchedData = ref(null)

  const addData = async (data) => { // addDoc
    errorAddData.value = null 
    try {
      await projectFirestore.collection(url).add(data)
    } catch(err) {
      console.log(err.message);
      errorAddData.value = err.message
    }
  }

  const fetchRealtimeData = async (url) => {
    let collectionRef = projectFirestore.collection(url).orderBy('createdAt')
    collectionRef.onSnapshot((snap) => {
      let res = []
      snap.docs.forEach((doc) => {
        doc.data().createdAt && res.push({...doc.data(), id: doc.id})
      })
      fetchedRealtimeData.value = res
      errorFetchedData.value = null
    }, (err) => {
      console.log(err.message);
      fetchedRealtimeData.value = null
      errorFetchedData.value = 'Could not fetch data!'
    })
  }

  return {errorFetchedData, errorAddData, addData, fetchedData, fetchedRealtimeData, fetchRealtimeData}
}


export default fetchService