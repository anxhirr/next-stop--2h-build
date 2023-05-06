const Profile = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-4xl font-bold mb-3'>Profile</h1>
        <p>Wellcome to your profile page.</p>

        <div className='flex mt-8 justify-between'>
          <div>
            <div className='p-4'>
              <h2 className='text-xl mb-4'>Select your language</h2>
              <select name='' id='' className='text-black w-full px-4 py-2'>
                <option value=''>English</option>
                <option value=''>Italian</option>
                <option value=''>Spanish</option>
                <option value=''>German</option>
                <option value=''>French</option>
                <option value=''>Japanese</option>
                <option value=''>Portuguese</option>
                <option value=''>Russian</option>
                <option value=''>Korean</option>
                <option value=''>Arabic</option>
                <option value=''>Dutch</option>
                <option value=''>Swedish</option>
                <option value=''>Danish</option>
                <option value=''>Norwegian</option>
                <option value=''>Finnish</option>
                <option value=''>Polish</option>
                <option value=''>Czech</option>
                <option value=''>Hungarian</option>
                <option value=''>Greek</option>
                <option value=''>Turkish</option>
              </select>
            </div>
            <div>
              <div className='p-4'>
                <h2 className='text-xl mb-4'>Select your bus area</h2>
                <select name='' id='' className='text-black w-full px-4 py-2'>
                  <option value=''>Tirane</option>
                  <option value=''>Bllok</option>
                  <option value=''>Shkoze</option>
                  <option value=''>Ali Dem</option>
                  <option value=''>Kinostudio</option>
                  <option value=''>Burrel</option>
                  <option value=''>Fresk</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className='p-4'>
              <h2 className='text-xl mb-4'>Notifications</h2>
              <div className='flex gap-4'>
                <p>Notify when bus is near</p>
                <label class='switch'>
                  <input type='checkbox' className='p-4 w-7 h-7' />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
