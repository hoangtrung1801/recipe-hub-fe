import { useEffect, useState } from "react";
import RecipeCard from "~/components/RecipeCard";

const Account = () => {
    const [account, setAccount] = useState([]);

    useEffect(() => {
        getAccount();
    }, []);

    const getAccount = async () => {
        const check = localStorage.getItem("account");

        if (check) {
            setAccount(JSON.parse(check));
        } else {
            const apiUsers = await fetch(`http://localhost:3000/users`);
            const inforUsers = await apiUsers.json();

            localStorage.setItem("account", JSON.stringify(inforUsers.data));
            console.log(inforUsers);
            setAccount(inforUsers.data);
        }
    };

    return (
        <>
            {account.map((user) => {
                return (
                    <div key={user.id}>
                        <p> {user.name} </p> <img src={user.avatarUrl} alt={user.name} />{" "}
                        <span> {user.address} </span>{" "}
                    </div>
                );
            })}{" "}
        </>
    );
};

export default Account;
