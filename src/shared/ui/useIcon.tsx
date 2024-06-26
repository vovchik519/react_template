const useIcon = (link: string) => {
  return (
    // обязательно используйте цвет для fill или stroke, а так же min-width, width и height иначе иконка может отображаться не корректно
    <div>
      <svg>
        <use href={`/icon/sprite.svg#icon-${link}`}></use>
      </svg>
    </div>
  )
}

export default useIcon
