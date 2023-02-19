import { useRouter } from "next/router";
import React from "react";
import LanguageQuestions from "../../components/languageQuestions/LanguageQuestions";

function Details() {
  const router = useRouter();
  const { topics } = router.query;
  return (
    <>
      <LanguageQuestions topic={topics} />
    </>
  );
}

export default Details;
