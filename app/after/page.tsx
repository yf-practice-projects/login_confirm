'use client'
import { useSession } from "next-auth/react"


const AfterPage = () => {
	const session = useSession();
	console.log(session)
	return (
		<div>test</div>
	)
}

export default AfterPage


