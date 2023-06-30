import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { SearchModalContext } from '../../contexts/searchModalContext';
import { SearchModalStyles } from '../../styles/search/SearchModalStyles';
import ActionButton from '../buttons/ActionButton';

function Search() {
    const { isSearchModelOpen} = useContext(SearchModalContext);

    if(!isSearchModelOpen) return null;

    return (
        <SearchModalStyles>
            <div className="modal__container">
                <ActionButton className="close">
                    <MdClose/>
                </ActionButton>
            </div>
        </SearchModalStyles>
    )
}

export default Search;