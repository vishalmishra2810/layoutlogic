import { useRouter } from "next/router";
import React from "react";
import ReadBlog from "../../components/readBlog/ReadBlog";
import style from "../../styles/style.module.scss";

function OpenBlog() {
  const router = useRouter();
  const { blog } = router.query;
  return (
    <div className={style.openBlog}>
      <ReadBlog slug={blog} />
    </div>
  );
}

export default OpenBlog;
