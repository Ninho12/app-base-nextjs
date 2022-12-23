import Style from "../../styles/form.module.css"

export default function InputMaranatha() {
    return (
      <div className={Style.campo} >

        <label>Nome:</label>
        <input type="text" name="Nome" placeholder="Nome" />

      </div>
    )
}
  