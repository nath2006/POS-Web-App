import React, {useState, useEffect} from "react";
import Layout from "@/components/layouts/Layout";
import api from "@/api";
import TranscationList from "@/components/elements/TransactionList/TranscastionList";

export default function Transaction() {
  const [ transcationList, setTranscationList] = useState([])

  const fetchTranscations = async () => {
    try {  
      const response = await api.get('/transactions');
      const data = response.data.payload.transactions;
      setTranscationList(data);
    }catch (err) {
      throw Error(err);
    }
  }

  useEffect(() => {
    fetchTranscations();
  }, [])

  return (
    <Layout >
        <h1>Transaction History</h1>
        <TranscationList transcationList={transcationList}/>
    </Layout>
  )
}
