import { useEffect, useState } from "react";
import { FetchCoinData } from "../../Services/FetchCoinData";
import { isError, useQuery } from "react-query";

function CoinTable() {
  // useEffect(() => {
  //   FetchCoinData(1, "usd");
  // }, []);

  //better way to fetch
  const [page, setPage] = useState(1);
  const {data, isLoading, isError, error} = useQuery(
    ["coins", page],
    () => FetchCoinData(page, "usd"),
    {
      retry: 2,
      retryDelay: 1000,
      casheTime: 1000 * 60 * 2,
    }
  );

  useEffect(() => {
    console.log(data);   
  },[data])

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (isError) {
    return <div>Error : {error.message}</div>;
  }

  return <>Coin Table <button onClick={()=>setPage(page + 1)}>Click</button>{page}</>;
}

export default CoinTable;
