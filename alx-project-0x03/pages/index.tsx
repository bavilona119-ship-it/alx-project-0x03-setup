import Button from "@/components/common/Button";
import { useRouter } from "next/router";

interface PageRouteProps {
  pageRoute: string;
}

export default function Home() {
  const router = useRouter();

  // Imperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="
