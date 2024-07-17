import { useRouter } from "next/router";
const pageNo = () => {
    const router = useRouter();
    const PageNumber = router.query.pageNo;
  return (
    <div>{PageNumber}</div>
  )
}

export default pageNo;