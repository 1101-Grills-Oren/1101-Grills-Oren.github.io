import { useEffect } from 'preact/hooks'

declare const ethicalads: any

type AdProps = {
	type: 'text' | 'image',
	id: string,
}
export function Ad({ type, id }: AdProps) {
	return <></>
	

	//return <div data-ea-publisher="misode-github-io" data-ea-type={type} class="ad dark flat" id={id}></div>
	
}
