import React from 'react';
import firstImg from '../../Assets/sofa.svg';
import secImg from '../../Assets/dressing-table-table-svgrepo-com.svg';
import thirdImg from '../../Assets/door-enter-svgrepo-com.svg';
import fourthImg from '../../Assets/dining-room-svgrepo-com.svg';
import fifthImg from '../../Assets/cupboard-tv-svgrepo-com.svg';
import sixthImg from '../../Assets/bed-double-svgrepo-com.svg';
import seventhImg from '../../Assets/office-reader-svgrepo-com.svg';
import eightImg from '../../Assets/kitchen-room-svgrepo-com.svg';
import ninthImg from '../../Assets/lamp1-svgrepo-com.svg';
import tenthImg from '../../Assets/library-table-svgrepo-com.svg';
import eleventhImg from '../../Assets/dining-room-svgrepo-com.svg';
import twelthImg from '../../Assets/drawers-furniture-and-household-svgrepo-com.svg';


function Category() {
  const categoryImg = [firstImg, secImg, thirdImg, fourthImg, fifthImg, sixthImg, seventhImg,eightImg,ninthImg,tenthImg,eleventhImg,twelthImg];

  return (
    
    <div className='container'>
      <h1 className=' col-md-6 text-start'>My Market Category</h1>
      {categoryImg.map((img, index) => (
        <React.Fragment key={index}>
          <img className='categoryImg' src={img} alt={`Image ${index}`} />
          {(index + 1) % 6 === 0 && <br />} {/* Insert line break after the 6th image */}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Category;
