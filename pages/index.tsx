import React, {useEffect} from "react";
import {useRouter} from "next/router";

const IndexPage: React.FC = (): JSX.Element => {

  const router = useRouter()

  useEffect(()=>{
      router.push('cities/London').then()
  },[])

  return (
      <p>Loading...</p>
  )
}

export default IndexPage