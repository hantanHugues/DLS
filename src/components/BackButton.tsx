
import { ArrowLeft } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  if (location.pathname === '/profile') {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="fixed top-20 left-4 p-2 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors bg-white/50 backdrop-blur-sm dark:bg-gray-800/50 dark:text-gray-300 dark:hover:text-white rounded-full shadow-sm z-40"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="h-4 w-4" />
      Retour
    </Button>
  )
}
