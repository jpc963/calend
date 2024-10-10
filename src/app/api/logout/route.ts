import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function GET() {
  cookies().delete("grantId")
  cookies().delete("email")
  cookies().delete("calend_session")

  revalidatePath("/")
  redirect("/")
}
