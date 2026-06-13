import { redirect } from 'next/navigation'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Fluid Alchemy Studio',
}

export default function StudioPage() {
  redirect(process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'https://www.sanity.io/manage')
}
