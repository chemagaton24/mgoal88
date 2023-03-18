import { useCallback, useEffect, useRef, useState } from "react"

interface PropsType {
    match: string
    returnTrue: string
}

export const useMediaQuery = (props: PropsType[]) => {
    const mq = props
    const [matchTrue, setMatchTrue] = useState<string[]>([])
    const matchesRef = useRef<MediaQueryList[]>([])


    const resizeFn = useCallback(() => {
        setMatchTrue([])
        matchesRef.current.forEach((item, key) => {
            if ((item as MediaQueryList).matches) {
                setMatchTrue((prev) => [...prev, mq[key].returnTrue])
            }
        })
    }, [mq])

    useEffect(() => {
        matchesRef.current = []
        mq.forEach((item) => {
            matchesRef.current.push(window.matchMedia(item.match))
        })

        matchesRef.current.forEach((item, key) => {
            const itemMQ = item as MediaQueryList
            if (itemMQ.matches && !matchTrue.includes(mq[key].returnTrue)) {
                setMatchTrue((prev) => [...prev, mq[key].returnTrue])
            }
            itemMQ.addEventListener('change', resizeFn)
        })

        return () => {
            matchesRef.current.forEach((item, key) => {
                const itemMQ = item as MediaQueryList
                itemMQ.removeEventListener('change', resizeFn)
            })
        }
    }, [mq, matchTrue, resizeFn])

    return matchTrue
}