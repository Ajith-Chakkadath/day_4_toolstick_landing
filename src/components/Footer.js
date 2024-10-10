function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Toolsticks</div>
            <ul className="flex space-x-8">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Management</a></li>
              <li><a href="#" className="hover:text-gray-300">Project</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <p>© 2024 Toolsticks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  