function ContactsForm() {
  return (
    <form className="flex flex-col gap-2 bg-secondary-bg p-4 rounded-3xl border border-border w-full h-full">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Имя"
          className="bg-tertiary-bg rounded-2xl py-4 px-5 outline-none w-full"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="bg-tertiary-bg rounded-2xl py-4 px-5 outline-none w-full"
        />
      </div>
      <textarea
        placeholder="Описание проекта..."
        className="bg-tertiary-bg py-4 px-5 rounded-2xl w-full h-full outline-none resize-none"
      ></textarea>
      <button
        type="submit"
        className="bg-contrast-bg py-3 w-full text-tertiary-font font-medium text-lg rounded-2xl cursor-pointer hover:bg-contrast-bg-hover duration-300"
      >
        Отправить
      </button>
    </form>
  );
}

export default ContactsForm;
