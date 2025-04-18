import { useEffect } from 'preact/hooks'

declare const ethicalads: any

type AdProps = {
	type: 'text' | 'image',
	id: string,
}
export function Ad(x:AdProps) {
	x
	useEffect(() => {
		document.getElementById('ad-placeholder')?.remove()
		if ('ethicalads' in window) {
			ethicalads.load()
		}
	}, [])
	return <></>
	//return <div data-ea-publisher="misode-github-io" data-ea-type={type} class="ad dark flat" id={id}></div>
}
