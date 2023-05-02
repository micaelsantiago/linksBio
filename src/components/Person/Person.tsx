function Person() {
	const name: string = "Micael Santiago";
	const urlAvatar: sting = "src/assets/person.jpeg";

	return (
		<div className="flex justify-center items-center gap-3 flex-col my-6">
			<div className="w-3/12">
				<img src={urlAvatar.toString()} alt="Avatar image" className="rounded-full"/>
			</div>

			<h1 className="text-2xl font-bold text-white">{name}</h1>
		</div>
	)
}

export default Person;