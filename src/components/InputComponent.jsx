import React from "react";
const InputComponent = ({ name, setName, address, setAddress, phone, setPhone }) => {
    return (
        <React.Fragment>
            <div className="w-full space-y-8">
                <input type="hidden" name="remember" value="true" />
                <div className="flex flex-col gap-3 -space-y-px ">
                    <div>
                        <label>Name</label>
                        <input
                            name="name"
                            type="text"
                            autoComplete="name"
                            className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            name="text"
                            type="text"
                            autoComplete="email"
                            className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                            name="text"
                            type="text"
                            autoComplete="email"
                            className="relative block w-full appearance-none rounded-none  border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                            placeholder="Your address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Bio</label>
                        <textarea
                            className="relative block h-[90px] w-full appearance-none border border-gray-300 bg-primary-100 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-dark-0 focus:outline-none focus:ring-dark-0 sm:text-sm"
                            placeholder="Your Bio . . ."
                        ></textarea>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InputComponent;
