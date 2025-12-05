export default function UserCard ( {name, avatar="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/07/saitama.webp", bio="Bio kosong"}) {
    return (
        <div className="flex flex-col justify-center border p-3.5 rounded-b-xl rounded-t-sm m-5">
            <img src={avatar} alt="" className="w-[100px] rounded-2xl" />
            <h1 className="text-[20px] text-blue-500">{name}</h1>
            <p className="text-[10px] text-blue-500">{bio}</p>

        </div>
    );
}