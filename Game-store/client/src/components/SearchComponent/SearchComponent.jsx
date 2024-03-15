import { useEffect, useState } from "react";
import { Form, Input } from "./StyledSearchComponent.";
import { useSearchParams } from "react-router-dom";

const SearchComponent = ({ onSearch }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const searchTerm = searchParams.get("search") || "";

	const handleSearchChange = (event) => {
		setSearchParams({ search: event.target.value });
	};

	useEffect(() => {
		onSearch(searchTerm);
	}, [searchTerm, onSearch]);

	return (
		<Form>
			<Input
				type="text"
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder="Пошук..."
			/>
		</Form>
	);
};
export default SearchComponent;
