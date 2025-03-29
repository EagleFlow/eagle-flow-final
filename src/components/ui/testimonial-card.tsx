import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ 
  author,
  text,
  href 
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/card flex w-[320px] shrink-0 flex-col gap-4 rounded-lg bg-white/10 p-6 text-left",
        href && "transition-colors hover:bg-white/20"
      )}
    >
      <div className="flex items-center gap-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div className="font-medium text-white">{author.name}</div>
        </div>
      </div>
      <p className="text-white/90">{text}</p>
    </Card>
  )
}