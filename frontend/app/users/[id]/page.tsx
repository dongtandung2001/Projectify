const Page = ({
    params
}: {
    params: {
        id: string
    }
}) => {
    return (
        <div>
            ID PAGE! ID: {params.id}
        </div>
    )
}

export default Page