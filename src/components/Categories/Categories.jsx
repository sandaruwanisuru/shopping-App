import './Categories.scss';
import { Link } from 'react-router-dom';
const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1615468822882-4828d2602857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BlY3RhY2xlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Spectacles
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sunglasess
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {' '}
          <img
            src="https://images.unsplash.com/photo-1481834209647-66e1705e7402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwZWN0YWNsZXN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://plus.unsplash.com/premium_photo-1671117132608-4c367b99a65f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNwZWN0YWNsZXN8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Women
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {' '}
              <img
                src="https://images.unsplash.com/photo-1661983227947-d07ba784346c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BlY3RhY2xlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://plus.unsplash.com/premium_photo-1661255373874-f7585966a77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHMlMjAlMjBzcGVjdGFjbGVzfGVufDB8fDB8fHww"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Kids
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
