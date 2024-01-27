function TextInput({ title, state, setState }) {
  return (
    <div className="">
      <h1 className="">{title}</h1>
      {/* <div className="">
        <input
			className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
			type="number"
			value={state}
			onChange={(e) => setState(e.target.value)}
			placeholder={title}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg
            className="flex-shrink-0 w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div> */}
      <div
        className="bg-white border border-gray-200 rounded-lg dark:bg-slate-700 dark:border-gray-700"
        data-hs-input-number
      >
        <div className="w-full flex justify-between items-center gap-x-1">
          <div className="grow py-2 px-3">
            <input
              className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
              type="number"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder={title}
              data-hs-input-number-input
            />
          </div>
          <div className="flex items-center -gap-y-px divide-x divide-gray-200 border-s border-gray-200 dark:divide-gray-700 dark:border-gray-700">
            <button
              type="button"
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-input-number-decrement
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <button
              type="button"
              className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-medium last:rounded-e-lg bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-input-number-increment
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextInput;
