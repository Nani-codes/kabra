import { ShopContent } from "@/components/ShopContent";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
