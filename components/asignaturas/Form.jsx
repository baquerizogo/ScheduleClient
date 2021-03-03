import Select from 'react-select';
import {Box} from "react-feather";
import chroma from "chroma-js"

const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isFixed: true },
    { value: "purple", label: "Purple", color: "#5243AA", isFixed: true },
    { value: "red", label: "Red", color: "#FF5630", isFixed: false },
    { value: "orange", label: "Orange", color: "#FF8B00", isFixed: false },
    { value: "yellow", label: "Yellow", color: "#FFC400", isFixed: false }
  ]

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",
  
        ":active": {
          ...styles[":active"],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
        }
      }
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css()
      }
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white"
      }
    })
}

const Form = () => {
    return (  
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Añadir nueva asignatura</h4>
            </div>
            <div className="card-body">
                <form className="form form-horizontal">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="name">Nombre:</label>
                                </div>
                                <div className="col-sm-10">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><Box size="16"/></span>
                                        </div>
                                        <input type="text" id="name" className="form-control" name="name" placeholder="Nombres" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div className="form-group row">
                                <div className="col-sm-5 col-form-label">
                                    <label htmlFor="n_hours">Numero de horas:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <input type="number" id="n_hours" className="form-control" name="n_hours" placeholder="10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="description">Descripción:</label>
                                </div>
                                <div className="col-sm-10">
                                    <div className="input-group input-group-merge">
                                        <textarea className="form-control" id="description" rows="4" placeholder="Descripción"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div className="form-group row">
                                <div className="col-sm-5 col-form-label">
                                    <label htmlFor="hours_week">Horas semanales:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <input type="number" id="hours_week" className="form-control" name="hours_week" placeholder="10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group row">
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="basicSelect">Curso:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <select className="form-control" id="basicSelect">
                                                <option>Default</option>
                                                <option>Blade Runner</option>
                                                <option>Thor Ragnarok</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-form-label">
                                    <label htmlFor="basicSelect">Paralelo:</label>
                                </div>
                                <div className="col-sm-4">
                                    <div className="input-group input-group-merge">
                                        <div className="input-group-prepend">
                                            <select className="form-control" disabled="disabled" id="basicSelect">
                                                <option>Default</option>
                                                <option>Blade Runner</option>
                                                <option>Thor Ragnarok</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <div className="form-group row">
                                <div className="col-sm-3 col-form-label">
                                    <label htmlFor="basicSelect">Profesores:</label>
                                </div>
                                <div className="col-sm-9 col-md-9">
                                    <Select
                                        closeMenuOnSelect={false}
                                        defaultValue={[colourOptions[0], colourOptions[1]]}
                                        isMulti
                                        options={colourOptions}
                                        styles={colourStyles}
                                        className="React"
                                        classNamePrefix="select"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>              
    );
}
 
export default Form;