import {SearchPanel} from "./search-panel";
import {List} from "./list";
import {useEffect, useState} from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async (res) => {
            if (res.ok) {
                const data = await res.json();
                setList(data);
            }
        });
    }, [param]);

    return (
        <div>
            <SearchPanel param={param} setParam={setParam}/>
            <List list={list}/>
        </div>
    );
};

export default ProjectListScreen;
