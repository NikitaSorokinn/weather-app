import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {cities} from "../config/variables";
import {HomeTemplate} from "../components/templates/Home";

const IndexPage: React.FC = (): JSX.Element => {

  const router = useRouter()

  useEffect(()=>{
      router.push(`cities/${cities[0].name}`).then()
  },[])

  return (
      <HomeTemplate isSun={false} isEmpty={true}/>
  )
}

export default IndexPage