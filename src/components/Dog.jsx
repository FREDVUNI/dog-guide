import React from "react";

const Dog = ({ dog }) => {
  return (
    <div id="result">
      <div className="info">
        {dog.reference_image_id ? (
          <img
            src={`https://cdn2.thedogapi.com/images/${dog?.reference_image_id}_1280.jpg`}
            className="poster"
            alt={dog?.name}
          />
        ) : (
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXx7/DNy8zw7u/KyMnOzM3s6uvT0dLW1NXa2Nnf3d7j4eLRz9Do5ufh3+D08vPq6OkPSj7tAAAFAUlEQVR4nO2cbW+sIBCF5V1R8f//26vo7irMqG1vImzOk/RDS2o4ywAzB9ymAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQG2Hmt61VMDmtdWtIGaHxc6P1Tb0iZaeUWFDay6zV2LVVKWce6Nz/YFrlrRpTFbP6XeuYfwAVMOwkzNhh32jaQ6tqK5ToRUK/kyiPAquU6HWqUNi3iJAKnOkqW2+kzSQI4V4iplyg0P7RDv+YLh/CORS31SZQ8oWrKk4nR2kQdh3EjmysKk7DSGvQ6yCSQyhETYuNbGkNol+GaejpRtU93e/7eGIlWcN0HqZAR/ASpk/3+z6swmVPlKzCesJUMkvJIiI0EzMNjzlB2RhWg3DMRhJR1WyJAytwVhi4Vagqhdw0XLb1M4Xj0z2/y4lCaxpeoehqWWqg8KsVzun1l8/Dc4XVrKUTu+N9y27BJt6xCPZM4j1TjcJm5MJUj2d5qZ2e7vht+Mx7KRC/IPPmk+tY5HOJafH1YdgdQnDFRdwOSJdq5m0ahyKPM+RklVJic+8zs3RFx0baiJqDdHuSaecnlWaDSyO2EwoVNdKrqWrXkZFkmG7V4eReT2oLOs6QO/93da9JL6bfQo8yhF9W2y5bULYciUeDe5EYiJmo3iU8Fac2thxLy2IkJgO2bHpEnKr28x9E1hPlmz75lzImo0k3uN7Hv6qT3qbHGlvCln4shVj9+cIZR+t4gKaSymiw+/PD3sdJmCd0RcQpsW6uZ4XSq5cKZYc03nYfgOo2HfmTVAn2G1UrbdmJ9P2ytSmd6VswrVgaxXtXyMJdlFEUU0noe86FRsqGTVDW1vevHfEk9XyYkvav+1WVQD1JPV9v0MUQuQZKaSKSiTxS4fMT0ZBnoZlC4/3Ytc5a61zbjd7n0UemegXU/YbKwI79CmbsnFaHzUO4bkwvoFSr0LRMzevaab8G0Qqf998uFAbZWtZ6U3Z/IaxYhVQV8VHY8b5TpP9kq6VGKbmWvvLJE9ftjTNnzkABa6mkjLXNkBh445QapkJ3/JOsjbXcUhXbXKNucOgCFFIO99LlcFfgWyIR00XYNTIPrhik1NUuXmKci8REfH4aNpQns6yPnGfISIxKcp+1jCI/u0q5lK0nBzAk68XFMYl4W8QQZncv4laR9vWS6DTK1Kd5WtqL6dCxRSB//MLRxzJJHgQWdF1xV2DE3e2nMbqw2cWfBF3ZZ0UdCU5HkVrEj524IXzJFpLBi/VJPf0Ow2OExs/FX7f2ijJcrnkfHw7zk5h3NJ7lc2DEnpBeDKL8PKlAfTtO7rWdogvZGy4hkpybg1iCdXgH0rm5Rf+8sXaLk+s0V4P4fLl7h58lpEcK2uJPkL8ewjLq3Wt+UjVlCquYiMy7FvcU1jARuZsW9yj9Ss1C+EOQ7t9vK5e/KVQVKGy+XuHfxlB/vcIynKdzwq+zUlHJbvG3/bCK+onPaXq7wZ9HVZG10TcPZ31uCivN4BiNNUzDhjmQ6dtDAHrSyakjSGkTw6V3hkxHHA1X8wUZ6UU3pYmbF82Uear1vGGZGDWqo2siOejjMNaQdm/s70kpN7HLhzl8FLX4UCtTv333zMVbIuY1G1U1VuKLYDqh3XD5/UFhHm+tdRknoT/lrnEdth8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANXwD1GgKbrNUTQ1AAAAAElFTkSuQmCC"
            alt="image"
            className="poster"
          />
        )}
        <div>
          <h2>{dog?.name}</h2>
          <p className="details">Temperament: {dog?.temperament}</p>
          <p className="details">Origin: {dog?.origin}</p>
          <div className="breed">
            <div>Weight (imperial): {dog?.weight.imperial}</div>
            <div>Height (imperial): {dog?.height.imperial}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dog;
