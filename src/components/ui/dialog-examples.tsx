import React from "react";
import { Button } from "./button";
import { AdaptiveAlertDialog, useAdaptiveAlertDialog } from "./adaptive-alert-dialog";
import { Trash2, LogOut, Save, AlertTriangle } from "lucide-react";

// Delete confirmation dialog component
export const DeleteConfirmationDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName?: string;
}> = ({ isOpen, onClose, onConfirm, itemName = "item" }) => {
  return (
    <AdaptiveAlertDialog
      open={isOpen}
      onOpenChange={onClose}
      title="Delete Item"
      description={`Are you sure you want to delete this ${itemName}? This action cannot be undone.`}
      confirmText="Delete"
      cancelText="Cancel"
      onConfirm={onConfirm}
      onCancel={onClose}
      variant="destructive"
    />
  );
};

// Logout confirmation dialog component
export const LogoutConfirmationDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <AdaptiveAlertDialog
      open={isOpen}
      onOpenChange={onClose}
      title="Sign Out"
      description="Are you sure you want to sign out? You'll need to log in again to access your account."
      confirmText="Sign Out"
      cancelText="Stay Logged In"
      onConfirm={onConfirm}
      onCancel={onClose}
    />
  );
};

// Save changes dialog component
export const SaveChangesDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onDiscard: () => void;
}> = ({ isOpen, onClose, onSave, onDiscard }) => {
  return (
    <AdaptiveAlertDialog
      open={isOpen}
      onOpenChange={onClose}
      title="Unsaved Changes"
      description="You have unsaved changes. What would you like to do?"
      confirmText="Save Changes"
      cancelText="Discard"
      onConfirm={onSave}
      onCancel={onDiscard}
    />
  );
};

// Warning dialog component
export const WarningDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}> = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <AdaptiveAlertDialog
      open={isOpen}
      onOpenChange={onClose}
      title={title}
      description={message}
      confirmText="Continue"
      cancelText="Cancel"
      onConfirm={onConfirm}
      onCancel={onClose}
    />
  );
};

// Example usage component that demonstrates all dialog types
export const DialogExamples: React.FC = () => {
  const deleteDialog = useAdaptiveAlertDialog();
  const logoutDialog = useAdaptiveAlertDialog();
  const saveDialog = useAdaptiveAlertDialog();
  const warningDialog = useAdaptiveAlertDialog();

  const handleDelete = () => {
    console.log("Item deleted!");
    // Add your delete logic here
  };

  const handleLogout = () => {
    console.log("User logged out!");
    // Add your logout logic here
  };

  const handleSave = () => {
    console.log("Changes saved!");
    // Add your save logic here
  };

  const handleDiscard = () => {
    console.log("Changes discarded!");
    // Add your discard logic here
  };

  const handleWarningConfirm = () => {
    console.log("Warning confirmed!");
    // Add your warning action here
  };

  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="destructive"
        onClick={deleteDialog.openDialog}
        className="flex items-center gap-2"
      >
        <Trash2 size={16} />
        Delete Item
      </Button>

      <Button
        variant="outline"
        onClick={logoutDialog.openDialog}
        className="flex items-center gap-2"
      >
        <LogOut size={16} />
        Sign Out
      </Button>

      <Button
        variant="default"
        onClick={saveDialog.openDialog}
        className="flex items-center gap-2"
      >
        <Save size={16} />
        Save Changes
      </Button>

      <Button
        variant="secondary"
        onClick={warningDialog.openDialog}
        className="flex items-center gap-2"
      >
        <AlertTriangle size={16} />
        Show Warning
      </Button>

      {/* Dialog Components */}
      <DeleteConfirmationDialog
        isOpen={deleteDialog.isOpen}
        onClose={deleteDialog.closeDialog}
        onConfirm={handleDelete}
        itemName="bug report"
      />

      <LogoutConfirmationDialog
        isOpen={logoutDialog.isOpen}
        onClose={logoutDialog.closeDialog}
        onConfirm={handleLogout}
      />

      <SaveChangesDialog
        isOpen={saveDialog.isOpen}
        onClose={saveDialog.closeDialog}
        onSave={handleSave}
        onDiscard={handleDiscard}
      />

      <WarningDialog
        isOpen={warningDialog.isOpen}
        onClose={warningDialog.closeDialog}
        onConfirm={handleWarningConfirm}
        title="Potential Security Risk"
        message="This action may expose sensitive information. Are you sure you want to continue?"
      />
    </div>
  );
};