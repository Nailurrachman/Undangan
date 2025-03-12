import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationButtonsProps {
  prevPage?: string
  nextPage?: string
}

export default function NavigationButtons({ prevPage, nextPage }: NavigationButtonsProps) {
  return (
    <div className="flex justify-between w-full mt-8">
      {prevPage ? (
        <Link href={prevPage}>
          <Button variant="outline" className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Kembali
          </Button>
        </Link>
      ) : (
        <div></div>
      )}

      {nextPage && (
        <Link href={nextPage}>
          <Button className="flex items-center gap-2">
            Lanjutkan
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  )
}

