import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {cities} from "../config/variables";

const IndexPage: React.FC = (): JSX.Element => {

  const router = useRouter()

  useEffect(()=>{
      router.push(`cities/${cities[0].name}`).then()
  },[])

  return (
      <p>Loading...</p>
  )
}

export default IndexPage