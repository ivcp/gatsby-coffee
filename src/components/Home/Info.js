import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 colsm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A id
              fugit officiis temporibus molestiae quasi quae suscipit quaerat
              delectus ex quam nihil voluptatum, sapiente animi. Sequi
              consequuntur sit ducimus aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur deleniti ipsa consectetur
              vitae sint magnam. Iusto quas quasi laboriosam commodi modi, odit
              sit provident delectus non atque repellat repellendus quia.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
